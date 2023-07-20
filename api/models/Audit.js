const mongoose = require("mongoose")

const AuditSchema = new mongoose.Schema(
    {
        refId:{
            type:String,
            required:true,
        },
        date:{
            type:Date,
            required:true,
            default:Date.now
        },
        time:{
            type:String,
            required:true,
        },
        email:{
            type:String,
            required:true
        },
        location:{
            type:String,
            required:true
        },
        auditOfficial:{
            type: String,
            required:true,
        }
    },{timestamps:true}
)

module.exports = mongoose.model("Audit",AuditSchema);