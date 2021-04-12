export class Blog {

    constructor(
        _id             = '', 
        idUser          = '',
        state           = '', 
        city            = '',
        title           = '', 
        introParagraph  = '',
        paragraphs      = '',
        date            = '',
        lan             = '',
        tags            = ''
    ) {
        this._id                = _id;
        this.idUser             = idUser;
        this.state              = state;
        this.city               = city,
        this.title              = title;
        this.introParagraph     = introParagraph,
        this.paragraphs         = paragraphs;
        this.date               = date;
        this.lan                = lan;
        this.tags               = tags;
    }

    _id                 : string;
    idUser              : string;
    state               : string;
    city                : string;
    title               : string;
    introParagraph      : string;
    paragraphs          : string;
    date                : string;
    lan                 : string;
    tags                : string;
}
