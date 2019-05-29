import * as React from 'react';

type TechnologyBlockProps = {
    image: string,
    header: string,
    text: string
}

export const TechnologyBlock = function ({ image, header, text }: TechnologyBlockProps) {
    return (
        <div>
            <div className="col-lg-5  col-lg-offset-3">
                <p><img className="img-responsive" src={image} alt="" /></p>
            </div>
            <div className="col-lg-4">
                <p>
                    {header}<br />
                    {text}<br />
                </p>
            </div>
        </div>
    )
}
