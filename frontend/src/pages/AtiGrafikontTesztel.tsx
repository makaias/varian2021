import React, {ReactElement} from "react";
import useEndpoint from "../hooks/useEndpoint";


export default function AtiGrafikontTesztel({patientId, doctorId}): ReactElement {
    const usedEndpoint = useEndpoint({
        conf: {
            url: `/statistics/${doctorId}/${patientId}`
        },
        deps: [patientId, doctorId],
    })

    return <div>
        <button onClick={() => usedEndpoint.reloadEndpoint()}>
            Refresh
        </button>

        {usedEndpoint.pending && (
            <p>Pending...</p>
        )}
        {usedEndpoint.failed && (
            <p>Failed</p>
        )}
        <h2>badges</h2>
        {usedEndpoint.succeeded && usedEndpoint.data.badges.map((item, index) => {
            return (
                <p key={index}>{item}</p>
            );
        })}

    </div>;
}
