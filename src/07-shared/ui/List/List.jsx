import s from './List.module.scss';

export const List = ({info}) => {
    if(!info) return <p>The list is empty</p>

    return <div className={s.wrapper}>
        <h4>
            {info?.header || 'Empty Header'}
        </h4>
        <ul className={s.options}>
            {info?.options?.map((option, index)=>{
                return <li key={index}>{option}</li>
            })}
        </ul>
        <p>
            {info?.text || ''}
        </p>
    </div>
}