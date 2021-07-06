import { Instance } from "mobx-state-tree"
import { PokemonV2PokedexdescriptionVarPopFieldsModelBase } from "./PokemonV2PokedexdescriptionVarPopFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2PokedexdescriptionVarPopFieldsModel */
export interface PokemonV2PokedexdescriptionVarPopFieldsModelType extends Instance<typeof PokemonV2PokedexdescriptionVarPopFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2PokedexdescriptionVarPopFieldsModel */
export { selectFromPokemonV2PokedexdescriptionVarPopFields, pokemonV2PokedexdescriptionVarPopFieldsModelPrimitives, PokemonV2PokedexdescriptionVarPopFieldsModelSelector } from "./PokemonV2PokedexdescriptionVarPopFieldsModel.base"

/**
 * PokemonV2PokedexdescriptionVarPopFieldsModel
 *
 * aggregate var_pop on columns
 */
export const PokemonV2PokedexdescriptionVarPopFieldsModel = PokemonV2PokedexdescriptionVarPopFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
