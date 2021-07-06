import { Instance } from "mobx-state-tree"
import { PokemonV2MoveMinFieldsModelBase } from "./PokemonV2MoveMinFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2MoveMinFieldsModel */
export interface PokemonV2MoveMinFieldsModelType extends Instance<typeof PokemonV2MoveMinFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2MoveMinFieldsModel */
export { selectFromPokemonV2MoveMinFields, pokemonV2MoveMinFieldsModelPrimitives, PokemonV2MoveMinFieldsModelSelector } from "./PokemonV2MoveMinFieldsModel.base"

/**
 * PokemonV2MoveMinFieldsModel
 *
 * aggregate min on columns
 */
export const PokemonV2MoveMinFieldsModel = PokemonV2MoveMinFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
