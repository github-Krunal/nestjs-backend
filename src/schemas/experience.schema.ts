import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

@Schema({
    timestamps:true,
    toJSON:{
        transform: function (doc: any, ret: any) {
            ret.RecordID = ret._id
            delete ret._id
            delete ret.__v;
            return ret;
          },
    }
})

export class Experience extends Document{
    @Prop()
    PostName:string;
    @Prop()
    EmployeeType:string
    @Prop()
    Duration:string
    @Prop()
    CompanyName:string
    @Prop()
    Description:string
    @Prop()
    CreatedByGuid:string
}

const schema=SchemaFactory.createForClass(Experience);
export const ExperienceSchema=schema;