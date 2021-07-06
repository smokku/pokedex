import { Instance } from "mobx-state-tree"
import { PokemonV2PokemonspeciesVarPopFieldsModelBase } from "./PokemonV2PokemonspeciesVarPopFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2PokemonspeciesVarPopFieldsModel */
export interface PokemonV2PokemonspeciesVarPopFieldsModelType extends Instance<typeof PokemonV2PokemonspeciesVarPopFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2PokemonspeciesVarPopFieldsModel */
export { selectFromPokemonV2PokemonspeciesVarPopFields, pokemonV2PokemonspeciesVarPopFieldsModelPrimitives, PokemonV2PokemonspeciesVarPopFieldsModelSelector } from "./PokemonV2PokemonspeciesVarPopFieldsModel.base"

/**
 * PokemonV2PokemonspeciesVarPopFieldsModel
 *
 * aggregate var_pop on columns
 */
export const PokemonV2PokemonspeciesVarPopFieldsModel = PokemonV2PokemonspeciesVarPopFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
