import { Instance } from "mobx-state-tree"
import { PokemonV2PokedexStddevPopFieldsModelBase } from "./PokemonV2PokedexStddevPopFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2PokedexStddevPopFieldsModel */
export interface PokemonV2PokedexStddevPopFieldsModelType extends Instance<typeof PokemonV2PokedexStddevPopFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2PokedexStddevPopFieldsModel */
export { selectFromPokemonV2PokedexStddevPopFields, pokemonV2PokedexStddevPopFieldsModelPrimitives, PokemonV2PokedexStddevPopFieldsModelSelector } from "./PokemonV2PokedexStddevPopFieldsModel.base"

/**
 * PokemonV2PokedexStddevPopFieldsModel
 *
 * aggregate stddev_pop on columns
 */
export const PokemonV2PokedexStddevPopFieldsModel = PokemonV2PokedexStddevPopFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
