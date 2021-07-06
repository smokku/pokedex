import { Instance } from "mobx-state-tree"
import { PokemonV2MoveattributedescriptionAvgFieldsModelBase } from "./PokemonV2MoveattributedescriptionAvgFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2MoveattributedescriptionAvgFieldsModel */
export interface PokemonV2MoveattributedescriptionAvgFieldsModelType extends Instance<typeof PokemonV2MoveattributedescriptionAvgFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2MoveattributedescriptionAvgFieldsModel */
export { selectFromPokemonV2MoveattributedescriptionAvgFields, pokemonV2MoveattributedescriptionAvgFieldsModelPrimitives, PokemonV2MoveattributedescriptionAvgFieldsModelSelector } from "./PokemonV2MoveattributedescriptionAvgFieldsModel.base"

/**
 * PokemonV2MoveattributedescriptionAvgFieldsModel
 *
 * aggregate avg on columns
 */
export const PokemonV2MoveattributedescriptionAvgFieldsModel = PokemonV2MoveattributedescriptionAvgFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
