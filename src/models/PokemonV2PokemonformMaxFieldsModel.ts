import { Instance } from "mobx-state-tree"
import { PokemonV2PokemonformMaxFieldsModelBase } from "./PokemonV2PokemonformMaxFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2PokemonformMaxFieldsModel */
export interface PokemonV2PokemonformMaxFieldsModelType extends Instance<typeof PokemonV2PokemonformMaxFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2PokemonformMaxFieldsModel */
export { selectFromPokemonV2PokemonformMaxFields, pokemonV2PokemonformMaxFieldsModelPrimitives, PokemonV2PokemonformMaxFieldsModelSelector } from "./PokemonV2PokemonformMaxFieldsModel.base"

/**
 * PokemonV2PokemonformMaxFieldsModel
 *
 * aggregate max on columns
 */
export const PokemonV2PokemonformMaxFieldsModel = PokemonV2PokemonformMaxFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
