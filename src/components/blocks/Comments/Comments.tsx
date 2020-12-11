import './Comments.scss'
import {
	BEMName
} from '../../../helpers';

interface params {
	id: number,
	created_at: string,
	name: string,
	body: string
};
type Props = {
	items: params[],
};

const c = 'Comments';

const Comments = ({items}: Props) => {
	const nested_comment = items.filter((i) => i.id === 9);
	const style = {marginLeft: '8px'}
	return (
		<div className={BEMName(c, 'container')}>
			{items.length > 0 ? items.map((i) => {
				const date = new Date(i.created_at).toLocaleString();
				return (
					<div key={i.id}>
						<div style={{display: 'flex', justifyContent: 'space-between'}}>
							<span className={BEMName(c, 'name')}>{i.name}</span>
							<span>{date}</span>
						</div>
						<p>
							{i.body}
						</p>
						{nested_comment.length > 0 && (
							<div className={BEMName(c, 'level')}>
								<span style={style} className={BEMName(c, 'name')}>{nested_comment[0].name}</span>
								<p style={style}>{nested_comment[0].body}</p>
							</div>
						)}
						<span className={BEMName(c, 'line')}></span>
					</div>
				);
			}) : 'Нет комментариев'}
		</div>
	);
}
export default Comments
