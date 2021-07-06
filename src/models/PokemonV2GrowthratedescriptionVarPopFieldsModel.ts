import { Instance } from "mobx-state-tree"
import { PokemonV2GrowthratedescriptionVarPopFieldsModelBase } from "./PokemonV2GrowthratedescriptionVarPopFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2GrowthratedescriptionVarPopFieldsModel */
export interface PokemonV2GrowthratedescriptionVarPopFieldsModelType extends Instance<typeof PokemonV2GrowthratedescriptionVarPopFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2GrowthratedescriptionVarPopFieldsModel */
export { selectFromPokemonV2GrowthratedescriptionVarPopFields, pokemonV2GrowthratedescriptionVarPopFieldsModelPrimitives, PokemonV2GrowthratedescriptionVarPopFieldsModelSelector } from "./PokemonV2GrowthratedescriptionVarPopFieldsModel.base"

/**
 * PokemonV2GrowthratedescriptionVarPopFieldsModel
 *
 * aggregate var_pop on columns
 */
export const PokemonV2GrowthratedescriptionVarPopFieldsModel = PokemonV2GrowthratedescriptionVarPopFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
