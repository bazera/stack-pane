import { Injectable } from '@angular/core';
import { FieldConfigFormModel, FieldType } from './field/field.model';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { BehaviorSubject, Observable } from 'rxjs';

export interface FieldListItem {
  name: string;
  key: string;
  type: FieldType;
  configModel: FieldConfigFormModel;
  fieldConfig: FormlyFieldConfig[];
}

@Injectable({
  providedIn: 'root',
})
export class FieldsService {
  private fields = new BehaviorSubject<FieldListItem[]>([]);
  get fields$(): Observable<FieldListItem[]> {
    return this.fields.asObservable();
  }

  getFields() {
    return this.fields.getValue();
  }

  getField(key: string): FieldListItem | undefined {
    const fields = this.fields.getValue();
    return fields.find((f) => f.key === key);
  }

  addField(field: FieldListItem) {
    this.fields.next([...this.fields.getValue(), field]);
  }

  resetFields(fields: FieldListItem[]) {
    this.fields.next(fields);
  }
}
