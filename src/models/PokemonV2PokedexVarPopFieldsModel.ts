import { Instance } from "mobx-state-tree"
import { PokemonV2PokedexVarPopFieldsModelBase } from "./PokemonV2PokedexVarPopFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2PokedexVarPopFieldsModel */
export interface PokemonV2PokedexVarPopFieldsModelType extends Instance<typeof PokemonV2PokedexVarPopFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2PokedexVarPopFieldsModel */
export { selectFromPokemonV2PokedexVarPopFields, pokemonV2PokedexVarPopFieldsModelPrimitives, PokemonV2PokedexVarPopFieldsModelSelector } from "./PokemonV2PokedexVarPopFieldsModel.base"

/**
 * PokemonV2PokedexVarPopFieldsModel
 *
 * aggregate var_pop on columns
 */
export const PokemonV2PokedexVarPopFieldsModel = PokemonV2PokedexVarPopFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
