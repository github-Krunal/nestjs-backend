import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
@Schema({
    timestamps: true,
    toJSON: {
        transform: function (doc: any, ret: any) {
            ret.RecordID = ret._id
            delete ret._id
            delete ret.__v;
            return ret;
        },
    }
})
export class Registration {
    @Prop()
    Username: string;
    @Prop()
    Password: string
}

const schema = SchemaFactory.createForClass(Registration);
export const registationSchema = schema;