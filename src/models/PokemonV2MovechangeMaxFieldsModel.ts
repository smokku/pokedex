import { Instance } from "mobx-state-tree"
import { PokemonV2MovechangeMaxFieldsModelBase } from "./PokemonV2MovechangeMaxFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2MovechangeMaxFieldsModel */
export interface PokemonV2MovechangeMaxFieldsModelType extends Instance<typeof PokemonV2MovechangeMaxFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2MovechangeMaxFieldsModel */
export { selectFromPokemonV2MovechangeMaxFields, pokemonV2MovechangeMaxFieldsModelPrimitives, PokemonV2MovechangeMaxFieldsModelSelector } from "./PokemonV2MovechangeMaxFieldsModel.base"

/**
 * PokemonV2MovechangeMaxFieldsModel
 *
 * aggregate max on columns
 */
export const PokemonV2MovechangeMaxFieldsModel = PokemonV2MovechangeMaxFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
