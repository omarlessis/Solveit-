import React from "react";
import LinkedIn from "../../assets/svg/LinkedIn";

const TeamScreen = () => {
	return (
		<div
			className="flex flex-col pt-16 min-h-screen pb-20"
			style={{
				backgroundColor: "#000000",
				backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 800 800'%3E%3Cg %3E%3Ccircle fill='%23000000' cx='400' cy='400' r='600'/%3E%3Ccircle fill='%23180d1c' cx='400' cy='400' r='500'/%3E%3Ccircle fill='%23261431' cx='400' cy='400' r='400'/%3E%3Ccircle fill='%23351947' cx='400' cy='400' r='300'/%3E%3Ccircle fill='%23451e5e' cx='400' cy='400' r='200'/%3E%3Ccircle fill='%23552277' cx='400' cy='400' r='100'/%3E%3C/g%3E%3C/svg%3E")`,

				backgroundSize: "cover",
			}}
		>
			<div className="flex h-2/5 justify-center text-5xl pt-6 mb-2 italic text-white">
				OUR TEAM
			</div>
			
			<div className="flex flex-row px-5 mt-16 justify-around">
				<div className="w-1/4 h-2/5  rounded-md border-8 border-white bg-white hover:scale-110 transform duration-500 ease-in-out">
					<img
						src="https://i.ibb.co/f8Sr5jf/67274491-660980201063859-7599779583268749312-n.jpg"
						alt="Tanmay Shreshth"
					></img>
					<div className="flex content-around w-full justify-center my-1.5">
						<a
							target="_blank"
							rel="noreferrer"
							className="mr-2"
							href="https://www.linkedin.com/in/omar-lessis-103872202/?originalSubdomain=tn"
						>
							<LinkedIn />
						</a>
						
					</div>
					<span className="font-semibold">Omar Lessis</span>
				</div>

			</div>
			
				
			
		</div>
	);
};

export default TeamScreen;
