import { Instance } from "mobx-state-tree"
import { PokemonV2PokedexMaxFieldsModelBase } from "./PokemonV2PokedexMaxFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2PokedexMaxFieldsModel */
export interface PokemonV2PokedexMaxFieldsModelType extends Instance<typeof PokemonV2PokedexMaxFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2PokedexMaxFieldsModel */
export { selectFromPokemonV2PokedexMaxFields, pokemonV2PokedexMaxFieldsModelPrimitives, PokemonV2PokedexMaxFieldsModelSelector } from "./PokemonV2PokedexMaxFieldsModel.base"

/**
 * PokemonV2PokedexMaxFieldsModel
 *
 * aggregate max on columns
 */
export const PokemonV2PokedexMaxFieldsModel = PokemonV2PokedexMaxFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
