import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => {
	return (
		<div className="ui container comments">
			<ApprovalCard>
				<CommentDetail
					avatar={faker.image.avatar()}
					author="Sam"
					timeAgo="Today at 06:00PM"
					text="Nice Blog"
				/>
			</ApprovalCard>
			<ApprovalCard>
				<CommentDetail
					avatar={faker.image.avatar()}
					author="Alex"
					timeAgo="Today at 02:00AM"
					text="Nice Blog 2"
				/>
			</ApprovalCard>
			<ApprovalCard>
				<CommentDetail
					avatar={faker.image.avatar()}
					author="Jane"
					timeAgo="Yesterday at 05:00PM"
					text="Nice Blog 3"
				/>
			</ApprovalCard>
		</div>
	);
};
ReactDOM.render(<App />, document.querySelector('#root'));
