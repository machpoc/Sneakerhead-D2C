import Link from 'next/link';
import router, { useRouter } from 'next/router';
import React from 'react';
import ButtonComponent from '../../Atoms/Button/Button';
import Grid, { Item } from '../../Atoms/Grid';
import {StyledHeader,StyledContent,StyledButton} from './ContentBanner.styled'
const ContentBanner = ({header,description,buttonName}) => {

const router = useRouter()

    return (<>
    <Grid marginTop="25px" >
<Item>
<Grid column={3} rows={1} justifyContent="center" aligncontent="center" backgroundImage="/images/refreshed/saveNature.jpg">

<Item display="flex">
<StyledHeader>{header}</StyledHeader>
</Item>
<Item display="flex">
<StyledContent>{description}</StyledContent>

</Item>
<Item display="flex">
<Link href={'/content/save-nature'}
                         as = {`/content/save-nature`} >
            <a>
    
<StyledButton>
{buttonName && <ButtonComponent  fill="true" bg="#D31424" hoverTextColor="#D31424" hoverBg="#ffffff" >
                {buttonName}
        </ButtonComponent>}
</StyledButton>

</a>
</Link>
</Item>
</Grid>
</Item>


    </Grid>
 
    
    </>  );
}
 
export default ContentBanner;