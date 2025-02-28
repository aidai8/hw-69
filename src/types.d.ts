interface IShow {
    title: string;
    information: string;
    id: string;
}

interface IShowAPI {
    [id: string]: IShow;
}