import React, { useEffect, useState } from 'react'
import SocialMediaService from '../../services/SocialMediaService';
import { SocialMediaModel } from '../../models/responses/SocialMediaModel';
import {CreateSocialMediaCommand  } from "../../models/requests/CreateSocialMediaCommand";

type Props = {}
type GUID = string & { isGuid: true };
function guid(guid: string): GUID {
    return guid as GUID;
}
function SocialMedias(props: Props) {
	
    const [skills, setSkills] = useState<SocialMediaModel[]>();

	let createSocialMediaModel:CreateSocialMediaCommand={
		Name:"Twitter",
		LogoUrl:"twitter.png"
	}
	let updateSocialMediaModel:SocialMediaModel={
		id:guid("3c5c69f8-a849-4722-8af8-08dc08711399"),
		name:"updated Logo",
		logoUrl:"updatedlogourl"
	}
	
	useEffect(() => {
		fetchSkills();
        console.log(skills?.map(r=>console.log(r.id  + r.logoUrl + r.name)
		));
        
	}, []);

	const fetchSkills = async ()  => {
		let service: SocialMediaService = new SocialMediaService();
		// await service.getAll("0","10").then(response=> {
		// 	setSkills(response.data.items);
		// });
		// await service.getById(guid("e373a725-75dd-407b-15a5-08dc031b9d53")).then(
		// 	(value)=>{
		// 		console.log(value);
				
		// 	}
		//  );
		let x =0;
		// x==0?await service.delete(guid("363e30d5-9738-4e56-dcb6-08dc086ef009")).then((res)=>{}).catch((err)=>{}):x++;
		//  x==0?await service.create(createSocialMediaModel).then((res)=>{}).catch((err)=>{}):x++;
		// x==0?await service.update(updateSocialMediaModel).then((res)=>{}).catch((err)=>{}):x++;
	};

  return (
    <div>selam Ben Mahmut İyi Günler Dilerim {skills?.map(r=>{
		return(
			<div>{r.id}{r.name}{r.logoUrl} selam</div>
		)
	})}</div>
  )
}

export default SocialMedias

