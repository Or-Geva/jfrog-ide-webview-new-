import css from './IaC.module.css'
import Header from '../../UI/Header/Header'
import { IIaCPage } from '../../../model/webviewPages'
import Summary from '../../UI/Summary/Summary'
import Severity from '../../UI/Summary/Severity'
import Vulnerability from '../../UI/Summary/Vulnerability'
import Abbreviation from '../../UI/Summary/Abbreviation'
import Findings from '../../UI/Findings/Findings'
import { Collapse } from '../../UI/Collapse/Collapse'

export interface Props {
	data: IIaCPage
}

function IaC(props: Props): JSX.Element {
	return (
		<div className={css.Container}>
			<Header Severity={props.data.severity} text={props.data.header} isResearch={false} />
			<Summary showAll expandButton={false}>
				<Vulnerability location={`${props.data.location.file}: ${props.data.location.startRow}`} />
				<Severity severity={props.data.severity} />
				{props.data.abbreviation && <Abbreviation abbreviation={props.data.abbreviation} />}
			</Summary>
			<Collapse header="Description" text={props.data.description} id="description" markdown />
			<Findings
				snippet={props.data.finding?.snippet}
				happen={props.data.finding?.happen}
				meaning={props.data.finding?.meaning}
				do={props.data.finding?.do}
			/>
		</div>
	)
}

export default IaC
