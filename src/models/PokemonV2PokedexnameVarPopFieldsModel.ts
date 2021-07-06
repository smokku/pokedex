import { Instance } from "mobx-state-tree"
import { PokemonV2PokedexnameVarPopFieldsModelBase } from "./PokemonV2PokedexnameVarPopFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2PokedexnameVarPopFieldsModel */
export interface PokemonV2PokedexnameVarPopFieldsModelType extends Instance<typeof PokemonV2PokedexnameVarPopFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2PokedexnameVarPopFieldsModel */
export { selectFromPokemonV2PokedexnameVarPopFields, pokemonV2PokedexnameVarPopFieldsModelPrimitives, PokemonV2PokedexnameVarPopFieldsModelSelector } from "./PokemonV2PokedexnameVarPopFieldsModel.base"

/**
 * PokemonV2PokedexnameVarPopFieldsModel
 *
 * aggregate var_pop on columns
 */
export const PokemonV2PokedexnameVarPopFieldsModel = PokemonV2PokedexnameVarPopFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
