import { Instance } from "mobx-state-tree"
import { PokemonV2MovelearnmethodnameVarPopFieldsModelBase } from "./PokemonV2MovelearnmethodnameVarPopFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2MovelearnmethodnameVarPopFieldsModel */
export interface PokemonV2MovelearnmethodnameVarPopFieldsModelType extends Instance<typeof PokemonV2MovelearnmethodnameVarPopFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2MovelearnmethodnameVarPopFieldsModel */
export { selectFromPokemonV2MovelearnmethodnameVarPopFields, pokemonV2MovelearnmethodnameVarPopFieldsModelPrimitives, PokemonV2MovelearnmethodnameVarPopFieldsModelSelector } from "./PokemonV2MovelearnmethodnameVarPopFieldsModel.base"

/**
 * PokemonV2MovelearnmethodnameVarPopFieldsModel
 *
 * aggregate var_pop on columns
 */
export const PokemonV2MovelearnmethodnameVarPopFieldsModel = PokemonV2MovelearnmethodnameVarPopFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
