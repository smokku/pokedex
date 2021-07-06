import { Instance } from "mobx-state-tree"
import { PokemonV2PokedexnameMaxFieldsModelBase } from "./PokemonV2PokedexnameMaxFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2PokedexnameMaxFieldsModel */
export interface PokemonV2PokedexnameMaxFieldsModelType extends Instance<typeof PokemonV2PokedexnameMaxFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2PokedexnameMaxFieldsModel */
export { selectFromPokemonV2PokedexnameMaxFields, pokemonV2PokedexnameMaxFieldsModelPrimitives, PokemonV2PokedexnameMaxFieldsModelSelector } from "./PokemonV2PokedexnameMaxFieldsModel.base"

/**
 * PokemonV2PokedexnameMaxFieldsModel
 *
 * aggregate max on columns
 */
export const PokemonV2PokedexnameMaxFieldsModel = PokemonV2PokedexnameMaxFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
