import { Instance } from "mobx-state-tree"
import { PokemonV2PokemonitemMaxFieldsModelBase } from "./PokemonV2PokemonitemMaxFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2PokemonitemMaxFieldsModel */
export interface PokemonV2PokemonitemMaxFieldsModelType extends Instance<typeof PokemonV2PokemonitemMaxFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2PokemonitemMaxFieldsModel */
export { selectFromPokemonV2PokemonitemMaxFields, pokemonV2PokemonitemMaxFieldsModelPrimitives, PokemonV2PokemonitemMaxFieldsModelSelector } from "./PokemonV2PokemonitemMaxFieldsModel.base"

/**
 * PokemonV2PokemonitemMaxFieldsModel
 *
 * aggregate max on columns
 */
export const PokemonV2PokemonitemMaxFieldsModel = PokemonV2PokemonitemMaxFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
