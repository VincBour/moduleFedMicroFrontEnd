import { Divider, Grid, Typography } from "@material-ui/core";
import React from "react";

export const Presentation: React.FC = () => (
    <Grid container>
        <Grid item xs={12}>
        <Typography component='h4' variant="h4">Nous rejoindre</Typography>
        </Grid>
        <Grid item xs={3} style={{margin: '8px'}}>
            <Typography align="justify">
                Vestibulum convallis id orci gravida convallis. Proin et nisi sapien. Donec auctor in ante ut eleifend. Suspendisse tempus interdum velit, nec porta nisl aliquam et. Integer eu pharetra turpis. Nulla dolor enim, interdum non congue vitae, luctus eget elit. Nam sollicitudin tincidunt lacinia.
            </Typography>
        </Grid>
        <Divider orientation="vertical" flexItem style={{margin:'8px'}} />
        <Grid item xs={8}>
            <Typography align="justify">
                Quisque porttitor, nulla vel ornare maximus, augue ante fermentum ante, et facilisis dui urna nec risus. Morbi nisl felis, congue sed maximus sed, porta at ante. Sed egestas nisl quis ante fermentum vehicula. Praesent ut nibh mi. Pellentesque pharetra, lorem ac ultricies vestibulum, turpis ligula tincidunt tellus, in vestibulum nisi neque sit amet urna. Maecenas varius laoreet tellus, nec commodo purus fringilla quis. Suspendisse potenti. Donec non metus est. In suscipit lorem ut tellus sollicitudin, consequat rutrum urna venenatis. Nam vel cursus risus. Praesent volutpat pellentesque ornare. Proin viverra, leo et finibus maximus, orci sapien mollis mauris, et condimentum tellus enim id massa. Fusce consequat risus elit, molestie venenatis ante fermentum sit amet. Duis at erat a nunc dignissim sodales. Curabitur condimentum odio lectus, convallis posuere justo eleifend vel.
            </Typography>
        </Grid>
    </Grid>
)