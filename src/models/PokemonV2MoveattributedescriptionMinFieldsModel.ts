import { Instance } from "mobx-state-tree"
import { PokemonV2MoveattributedescriptionMinFieldsModelBase } from "./PokemonV2MoveattributedescriptionMinFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2MoveattributedescriptionMinFieldsModel */
export interface PokemonV2MoveattributedescriptionMinFieldsModelType extends Instance<typeof PokemonV2MoveattributedescriptionMinFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2MoveattributedescriptionMinFieldsModel */
export { selectFromPokemonV2MoveattributedescriptionMinFields, pokemonV2MoveattributedescriptionMinFieldsModelPrimitives, PokemonV2MoveattributedescriptionMinFieldsModelSelector } from "./PokemonV2MoveattributedescriptionMinFieldsModel.base"

/**
 * PokemonV2MoveattributedescriptionMinFieldsModel
 *
 * aggregate min on columns
 */
export const PokemonV2MoveattributedescriptionMinFieldsModel = PokemonV2MoveattributedescriptionMinFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
