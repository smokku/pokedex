import { Instance } from "mobx-state-tree"
import { PokemonV2PokedexStddevFieldsModelBase } from "./PokemonV2PokedexStddevFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2PokedexStddevFieldsModel */
export interface PokemonV2PokedexStddevFieldsModelType extends Instance<typeof PokemonV2PokedexStddevFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2PokedexStddevFieldsModel */
export { selectFromPokemonV2PokedexStddevFields, pokemonV2PokedexStddevFieldsModelPrimitives, PokemonV2PokedexStddevFieldsModelSelector } from "./PokemonV2PokedexStddevFieldsModel.base"

/**
 * PokemonV2PokedexStddevFieldsModel
 *
 * aggregate stddev on columns
 */
export const PokemonV2PokedexStddevFieldsModel = PokemonV2PokedexStddevFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
