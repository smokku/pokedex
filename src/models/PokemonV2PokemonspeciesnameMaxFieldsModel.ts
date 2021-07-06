import { Instance } from "mobx-state-tree"
import { PokemonV2PokemonspeciesnameMaxFieldsModelBase } from "./PokemonV2PokemonspeciesnameMaxFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2PokemonspeciesnameMaxFieldsModel */
export interface PokemonV2PokemonspeciesnameMaxFieldsModelType extends Instance<typeof PokemonV2PokemonspeciesnameMaxFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2PokemonspeciesnameMaxFieldsModel */
export { selectFromPokemonV2PokemonspeciesnameMaxFields, pokemonV2PokemonspeciesnameMaxFieldsModelPrimitives, PokemonV2PokemonspeciesnameMaxFieldsModelSelector } from "./PokemonV2PokemonspeciesnameMaxFieldsModel.base"

/**
 * PokemonV2PokemonspeciesnameMaxFieldsModel
 *
 * aggregate max on columns
 */
export const PokemonV2PokemonspeciesnameMaxFieldsModel = PokemonV2PokemonspeciesnameMaxFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
