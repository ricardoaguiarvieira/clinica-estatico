export class MultipartFileDTO {

    id!: number;
    code!: number;
    base64Content!: string;
    contentType!: string;
    originalFilename!: string;

    constructor() {}
}