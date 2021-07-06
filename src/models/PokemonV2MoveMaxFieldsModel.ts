import { Instance } from "mobx-state-tree"
import { PokemonV2MoveMaxFieldsModelBase } from "./PokemonV2MoveMaxFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2MoveMaxFieldsModel */
export interface PokemonV2MoveMaxFieldsModelType extends Instance<typeof PokemonV2MoveMaxFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2MoveMaxFieldsModel */
export { selectFromPokemonV2MoveMaxFields, pokemonV2MoveMaxFieldsModelPrimitives, PokemonV2MoveMaxFieldsModelSelector } from "./PokemonV2MoveMaxFieldsModel.base"

/**
 * PokemonV2MoveMaxFieldsModel
 *
 * aggregate max on columns
 */
export const PokemonV2MoveMaxFieldsModel = PokemonV2MoveMaxFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
