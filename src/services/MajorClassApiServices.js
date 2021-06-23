import MajorClassRequest from "../requests/MajorClassRequest";

export const getListMajorClass = () => {
    let majorClassRequest = new MajorClassRequest()
    return majorClassRequest.getListMajorClass()
}