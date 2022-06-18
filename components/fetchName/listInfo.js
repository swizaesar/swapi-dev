import React from "react";
import { useDispatch, useSelector } from "react-redux";
import fetchApi from "../../services/fetchApi";
import GetPathUrl from "../../utils/getPathUrl";
import Link from "next/link";

const ListInfo = ({ data, id, length, target, nameObj }) => {
    const dispatch = useDispatch();
    const state = useSelector((state) => state);
    const [name, setName] = React.useState("-");
    React.useEffect(() => {
        if (data) {
            fetchApi.getInfoDetail({
                dispatch,
                slug: GetPathUrl(data),
                key: id,
                nameObj: nameObj,
            });
        }
    }, [data]);
    React.useEffect(() => {
        if (state[`info_${nameObj}_${id}`]?.isSuccess) {
            setName(state[`info_${nameObj}_${id}`].data[target]);
        }
    }, [state]);
    return (
        <Link href={GetPathUrl(data)}>
            <a>
                {name}
                {id + 1 < length ? ", " : ""}
            </a>
        </Link>
    );
};
export default ListInfo;
