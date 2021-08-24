import {Deserializable} from "../../shared/models/deserializable.model";

export class Hit implements Deserializable {
  public id: number | undefined;
  public hitmen_id: number | undefined;
  public hitman: string | undefined;
  public target: string | undefined;
  public description: string | undefined;
  public status: string | undefined;
  public creator: string | undefined;
  public creator_id: number | undefined;

  deserialize(input: any): this {
    return Object.assign(this, input);
  }
}
