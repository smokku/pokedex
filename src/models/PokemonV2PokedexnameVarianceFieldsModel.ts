import { Instance } from "mobx-state-tree"
import { PokemonV2PokedexnameVarianceFieldsModelBase } from "./PokemonV2PokedexnameVarianceFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2PokedexnameVarianceFieldsModel */
export interface PokemonV2PokedexnameVarianceFieldsModelType extends Instance<typeof PokemonV2PokedexnameVarianceFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2PokedexnameVarianceFieldsModel */
export { selectFromPokemonV2PokedexnameVarianceFields, pokemonV2PokedexnameVarianceFieldsModelPrimitives, PokemonV2PokedexnameVarianceFieldsModelSelector } from "./PokemonV2PokedexnameVarianceFieldsModel.base"

/**
 * PokemonV2PokedexnameVarianceFieldsModel
 *
 * aggregate variance on columns
 */
export const PokemonV2PokedexnameVarianceFieldsModel = PokemonV2PokedexnameVarianceFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
