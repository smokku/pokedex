import { Instance } from "mobx-state-tree"
import { PokemonV2PokemonMaxFieldsModelBase } from "./PokemonV2PokemonMaxFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2PokemonMaxFieldsModel */
export interface PokemonV2PokemonMaxFieldsModelType extends Instance<typeof PokemonV2PokemonMaxFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2PokemonMaxFieldsModel */
export { selectFromPokemonV2PokemonMaxFields, pokemonV2PokemonMaxFieldsModelPrimitives, PokemonV2PokemonMaxFieldsModelSelector } from "./PokemonV2PokemonMaxFieldsModel.base"

/**
 * PokemonV2PokemonMaxFieldsModel
 *
 * aggregate max on columns
 */
export const PokemonV2PokemonMaxFieldsModel = PokemonV2PokemonMaxFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
