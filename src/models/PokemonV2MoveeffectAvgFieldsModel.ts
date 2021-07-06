import { Instance } from "mobx-state-tree"
import { PokemonV2MoveeffectAvgFieldsModelBase } from "./PokemonV2MoveeffectAvgFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2MoveeffectAvgFieldsModel */
export interface PokemonV2MoveeffectAvgFieldsModelType extends Instance<typeof PokemonV2MoveeffectAvgFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2MoveeffectAvgFieldsModel */
export { selectFromPokemonV2MoveeffectAvgFields, pokemonV2MoveeffectAvgFieldsModelPrimitives, PokemonV2MoveeffectAvgFieldsModelSelector } from "./PokemonV2MoveeffectAvgFieldsModel.base"

/**
 * PokemonV2MoveeffectAvgFieldsModel
 *
 * aggregate avg on columns
 */
export const PokemonV2MoveeffectAvgFieldsModel = PokemonV2MoveeffectAvgFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
