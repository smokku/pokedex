import { Instance } from "mobx-state-tree"
import { PokemonV2PokemonshapeMaxFieldsModelBase } from "./PokemonV2PokemonshapeMaxFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2PokemonshapeMaxFieldsModel */
export interface PokemonV2PokemonshapeMaxFieldsModelType extends Instance<typeof PokemonV2PokemonshapeMaxFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2PokemonshapeMaxFieldsModel */
export { selectFromPokemonV2PokemonshapeMaxFields, pokemonV2PokemonshapeMaxFieldsModelPrimitives, PokemonV2PokemonshapeMaxFieldsModelSelector } from "./PokemonV2PokemonshapeMaxFieldsModel.base"

/**
 * PokemonV2PokemonshapeMaxFieldsModel
 *
 * aggregate max on columns
 */
export const PokemonV2PokemonshapeMaxFieldsModel = PokemonV2PokemonshapeMaxFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
