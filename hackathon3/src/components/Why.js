import React, { Component} from 'react';
import Dialog, { Card, CardContent, Divider } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles'



const styles = theme => ({
    info: {
        border: 1,
        height: 250,
        width: 225,
        padding: theme.spacing(3, 4)
    },
    rightcard: {
        border: 1,
        height: 250,
        width: 440,
        padding:theme.spacing(3, 4),
        justifyContent: 'center'
    }

});

class Why extends Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        const { classes } = this.props;
        return(
        <div>
            <Card style={{position: "absolute", bottom: 0, left: 0}} className={classes.info}>
                In America: 
               <CardContent>
                    1 out of 5 adults experience mental illness each year.
                </CardContent>
                <Divider />
                <CardContent>
                    The rate of depression among teens has jumped over 60% in the last decade
                </CardContent>
                <Divider />
                <CardContent>
                    Estimated 40-70 Million Americans are affected by mental health and less than 50% get help.
                </CardContent> 
                <Divider />
                <CardContent>
                    hello test 123
                </CardContent>
            </Card>

            <Card style={{position: "absolute", top: 0, right: 0}} className={classes.rightcard}>
                Although there's a spike in mental illness...
                <CardContent>

                </CardContent>
                <Divider />
                <CardContent>
                    51% of counties in the U.S. do not hace a psychiatrist...
                </CardContent>
                <Divider />
                <CardContent>
                    Insurance companies are still giving out Ghost Network referrals...
                </CardContent> 
                <Divider />
                <CardContent>
                    And companies can still deny aid on the grounds that that customer has not tried taking their lives enough times yet.
                </CardContent>

            </Card>
        </div>
        )
    }
}

export default withStyles(styles)(Why)