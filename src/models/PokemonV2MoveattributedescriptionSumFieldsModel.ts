import { Instance } from "mobx-state-tree"
import { PokemonV2MoveattributedescriptionSumFieldsModelBase } from "./PokemonV2MoveattributedescriptionSumFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2MoveattributedescriptionSumFieldsModel */
export interface PokemonV2MoveattributedescriptionSumFieldsModelType extends Instance<typeof PokemonV2MoveattributedescriptionSumFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2MoveattributedescriptionSumFieldsModel */
export { selectFromPokemonV2MoveattributedescriptionSumFields, pokemonV2MoveattributedescriptionSumFieldsModelPrimitives, PokemonV2MoveattributedescriptionSumFieldsModelSelector } from "./PokemonV2MoveattributedescriptionSumFieldsModel.base"

/**
 * PokemonV2MoveattributedescriptionSumFieldsModel
 *
 * aggregate sum on columns
 */
export const PokemonV2MoveattributedescriptionSumFieldsModel = PokemonV2MoveattributedescriptionSumFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
