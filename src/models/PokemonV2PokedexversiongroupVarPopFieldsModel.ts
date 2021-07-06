import { Instance } from "mobx-state-tree"
import { PokemonV2PokedexversiongroupVarPopFieldsModelBase } from "./PokemonV2PokedexversiongroupVarPopFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2PokedexversiongroupVarPopFieldsModel */
export interface PokemonV2PokedexversiongroupVarPopFieldsModelType extends Instance<typeof PokemonV2PokedexversiongroupVarPopFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2PokedexversiongroupVarPopFieldsModel */
export { selectFromPokemonV2PokedexversiongroupVarPopFields, pokemonV2PokedexversiongroupVarPopFieldsModelPrimitives, PokemonV2PokedexversiongroupVarPopFieldsModelSelector } from "./PokemonV2PokedexversiongroupVarPopFieldsModel.base"

/**
 * PokemonV2PokedexversiongroupVarPopFieldsModel
 *
 * aggregate var_pop on columns
 */
export const PokemonV2PokedexversiongroupVarPopFieldsModel = PokemonV2PokedexversiongroupVarPopFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
