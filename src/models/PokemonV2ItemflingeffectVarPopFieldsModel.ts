import { Instance } from "mobx-state-tree"
import { PokemonV2ItemflingeffectVarPopFieldsModelBase } from "./PokemonV2ItemflingeffectVarPopFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2ItemflingeffectVarPopFieldsModel */
export interface PokemonV2ItemflingeffectVarPopFieldsModelType extends Instance<typeof PokemonV2ItemflingeffectVarPopFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2ItemflingeffectVarPopFieldsModel */
export { selectFromPokemonV2ItemflingeffectVarPopFields, pokemonV2ItemflingeffectVarPopFieldsModelPrimitives, PokemonV2ItemflingeffectVarPopFieldsModelSelector } from "./PokemonV2ItemflingeffectVarPopFieldsModel.base"

/**
 * PokemonV2ItemflingeffectVarPopFieldsModel
 *
 * aggregate var_pop on columns
 */
export const PokemonV2ItemflingeffectVarPopFieldsModel = PokemonV2ItemflingeffectVarPopFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
