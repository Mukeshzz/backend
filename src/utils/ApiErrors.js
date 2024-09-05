class ApiErrors extends Error {
    constructor(
        statusCode,
        message = "Something Went Wrong",
        errors = [],
        statck = ""
    ){
        super(message)
        this.statusCode = statusCode
        this.data = this.data
        this.message = message
        this.success = this.success
        this.erros = errors

        if(statck){
            this.stack = statck
        }
        else{
            Error.captureStackTrace(this, this.constructor)
        }

    }
}


export {ApiErrors}