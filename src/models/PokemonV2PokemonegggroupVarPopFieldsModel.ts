import { Instance } from "mobx-state-tree"
import { PokemonV2PokemonegggroupVarPopFieldsModelBase } from "./PokemonV2PokemonegggroupVarPopFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2PokemonegggroupVarPopFieldsModel */
export interface PokemonV2PokemonegggroupVarPopFieldsModelType extends Instance<typeof PokemonV2PokemonegggroupVarPopFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2PokemonegggroupVarPopFieldsModel */
export { selectFromPokemonV2PokemonegggroupVarPopFields, pokemonV2PokemonegggroupVarPopFieldsModelPrimitives, PokemonV2PokemonegggroupVarPopFieldsModelSelector } from "./PokemonV2PokemonegggroupVarPopFieldsModel.base"

/**
 * PokemonV2PokemonegggroupVarPopFieldsModel
 *
 * aggregate var_pop on columns
 */
export const PokemonV2PokemonegggroupVarPopFieldsModel = PokemonV2PokemonegggroupVarPopFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
