import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Field, FieldConfigFormModel } from './field.model';

@Injectable({
  providedIn: 'root',
})
export class FieldsService {
  private fields = new BehaviorSubject<Field<FieldConfigFormModel>[]>([]);
  get fields$(): Observable<Field<FieldConfigFormModel>[]> {
    return this.fields.asObservable();
  }

  getFields() {
    return this.fields.getValue();
  }

  getField(key: string): Field<FieldConfigFormModel> | undefined {
    const fields = this.fields.getValue();
    return fields.find((f) => f.key === key);
  }

  addField(field: Field<FieldConfigFormModel>) {
    this.fields.next([...this.fields.getValue(), field]);
  }

  resetFields(fields: Field<FieldConfigFormModel>[]) {
    this.fields.next(fields);
  }
}
