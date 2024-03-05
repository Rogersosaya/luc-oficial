import { Avatar } from '@nextui-org/react'
import React from 'react'
import { AiOutlineDislike } from 'react-icons/ai'

function UserDislike() {
  return (
    <div className="flex gap-5 justify-between items-center mb-3">
          <div className="flex gap-5 mr-5">
            <Avatar isBordered radius="full" size="md" src="/img/jordan.jpg" />
            <div className="flex flex-col gap-1 items-start justify-center">
              <h4 className="text-small font-semibold leading-none text-default-600">
                Jordan Laureano
              </h4>
              <h5 className="text-small tracking-tight text-default-400">
                @jordan.laureano.g@uni.pe
              </h5>
            </div>
          </div>
          <AiOutlineDislike className="text-third " size={25} />
        </div>
  )
}

export default UserDislike
