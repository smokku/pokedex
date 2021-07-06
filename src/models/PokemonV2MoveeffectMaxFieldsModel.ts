import { Instance } from "mobx-state-tree"
import { PokemonV2MoveeffectMaxFieldsModelBase } from "./PokemonV2MoveeffectMaxFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2MoveeffectMaxFieldsModel */
export interface PokemonV2MoveeffectMaxFieldsModelType extends Instance<typeof PokemonV2MoveeffectMaxFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2MoveeffectMaxFieldsModel */
export { selectFromPokemonV2MoveeffectMaxFields, pokemonV2MoveeffectMaxFieldsModelPrimitives, PokemonV2MoveeffectMaxFieldsModelSelector } from "./PokemonV2MoveeffectMaxFieldsModel.base"

/**
 * PokemonV2MoveeffectMaxFieldsModel
 *
 * aggregate max on columns
 */
export const PokemonV2MoveeffectMaxFieldsModel = PokemonV2MoveeffectMaxFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
