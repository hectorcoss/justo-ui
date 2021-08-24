import {Deserializable} from "../../shared/models/deserializable.model";

export class Hitmen implements Deserializable {
  public id: number | 0 | undefined;
  public name: string | undefined;
  public email: string | undefined;
  public description: string | undefined;
  public active: boolean | undefined;
  public manager_name: string | undefined;
  public manages: string[] | undefined;

  deserialize(input: any): this {
    return Object.assign(this, input);
  }
}
