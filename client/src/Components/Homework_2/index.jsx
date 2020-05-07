import React from "react";
import { Segment, Table, Button } from "semantic-ui-react";

const config = require("../../config");

export default class Homework extends React.Component {
	state = {
		students: {
			keys: [],
			list: [],
    },
    column: "NUME",
    direction: "ascending",
	};
	constructor(props) {
		super(props);
		this.getStudents = this.getStudents.bind(this);

		//call function
	}

	componentDidMount() {
		this.getStudents();
	}

	getStudents() {
		//fetch our server
		fetch(`${config.protocol}://${config.server}:${config.port}/get_students`, {
			method: `POST`,
			headers: {
				limit: 10,
				order_by: this.state.column,
				order: this.state.direction === 'ascending' ? "ASC" : "DESC",
			},
		})
			.then((res) => res.json())
			.then((res) => {
				let students = {
					keys: res.metaData,
					list: res.rows,
				};
				this.setState({
					students: students,
				});
			})
			.catch((err) => {
				alert(err);
			});
	}

  handleSort = (clickedColumn) => () => {
    const { column, direction } = this.state

    if (column !== clickedColumn) {
      this.setState({
        column: clickedColumn,
        direction: 'ascending',
      })

      //get students on default click
      this.getStudents();
      return
    }

    this.setState({
      direction: direction === 'ascending' ? 'descending' : 'ascending',
    })

    //call get_students again
    this.getStudents();
  }

	render() {
		const { column, students, direction } = this.state;

		return (
			<div>
				<Segment>
					<Table sortable celled fixed>
						<Table.Header>
							<Table.Row>
								{students.keys.map((key, index) => (
									<Table.HeaderCell key={`student_table_header_${index}`} sorted={column === key.name ? direction : null} onClick={this.handleSort(key.name)}>
										{key.name}
									</Table.HeaderCell>
								))}
							</Table.Row>
						</Table.Header>

						<Table.Body>
							{students.list.length > 1
								? students.list.map((student, index) => (
										<Table.Row key={`student_table_row_${index}`}>
											{student.map((data, index) => (
												<Table.Cell collapsing>{data}</Table.Cell>
											))}
										</Table.Row>
								  ))
								: null}
						</Table.Body>
					</Table>
				</Segment>
			</div>
		);
	}
}
